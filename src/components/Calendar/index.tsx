import { useState, useEffect, Key } from 'react';
import { EventRow } from './styles';

declare global {
    interface Window {
        gapi: any;
    }
}

const Calendar: React.FC = () => {
    const [calendarItems, setCalendarItems] = useState<any>([])

    const CLIENT_ID = '95366772630-28i021vc5fren6rpk32b8fvo23m8rtr3.apps.googleusercontent.com'
    const API_KEY = 'AIzaSyDH1jECrWcg6iB9mMOm9-8A555TFKbdZiY'

    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

    // Authorization scopes required by the API; multiple scopes can be
    // included, separated by spaces.
    var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";


    useEffect(() => {

        window.gapi.load('client:auth2', initClient);

    }, []);

    const initClient = () => {
        window.gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES
        }).then(function () {
            // Listen for sign-in state changes.
            window.gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
            const authorizeButton = document.getElementById('authorize_button')!;
            const signoutButton = document.getElementById('signout_button')!;
            // Handle the initial sign-in state.
            updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get(), authorizeButton, signoutButton);
            authorizeButton.onclick = handleAuthClick;
            signoutButton.onclick = handleSignoutClick;
        }, function (error: any) {
            appendPre(JSON.stringify(error, null, 2));
        });
    }

    /**
     *  Called when the signed in status changes, to update the UI
     *  appropriately. After a sign-in, the API is called.
     */
    const updateSigninStatus = (isSignedIn: any, authorizeButton: { style: { display: string; }; } | undefined, signoutButton: { style: { display: string; }; } | undefined) => {
        if (isSignedIn && authorizeButton && signoutButton) {
            authorizeButton.style.display = 'none';
            signoutButton.style.display = 'block';
            listUpcomingEvents();
        } else if (authorizeButton && signoutButton) {
            authorizeButton.style.display = 'block';
            signoutButton.style.display = 'none';
            setCalendarItems([])
        }
    }

    /**
     *  Sign in the user upon button click.
     */
    const handleAuthClick = (event: any) => {
        window.gapi.auth2.getAuthInstance().signIn();
    }

    /**
     *  Sign out the user upon button click.
     */
    const handleSignoutClick = (event: any) => {
        setCalendarItems([])
        window.gapi.auth2.getAuthInstance().signOut();
    }

    /**
     * Append a pre element to the body containing the given message
     * as its text node. Used to display the results of the API call.
     *
     * @param {string} message Text to be placed in pre element.
     */
    const appendPre = (message: string) => {
        var pre = document.getElementById('content')!;
        var textContent = document.createTextNode(message + '\n');
        pre.appendChild(textContent);
    }

    /**
     * Print the summary and start datetime/date of the next ten events in
     * the authorized user's calendar. If no events are found an
     * appropriate message is printed.
     */
    const listUpcomingEvents = () => {
        window.gapi.client.calendar.events.list({
            'calendarId': 'primary',
            'timeMin': (new Date()).toISOString(),
            'showDeleted': false,
            'singleEvents': true,
            'maxResults': maxNrEvents,
            'orderBy': 'startTime'
        }).then(function (response: { result: { items: any; }; }) {
            var events = response.result.items;
            setCalendarItems(events)
            console.log("setCalendarItems", response)

        });
    }

    const maxNrEvents = 8;

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'];

    const getDays = (eventDate: Date) => {
        const day = 1000 * 60 * 60 * 24
        const d = new Date();
        d.setHours(0, 0, 0, 0)

        const msToEvent = eventDate.getTime() - d.getTime()

        return Math.floor(msToEvent / day)
    }

    const getTime = (dateTime: Date) => {
        console.log("dateTime", dateTime.toLocaleTimeString('no-NO', { hour: '2-digit', minute: '2-digit' }))
        return dateTime.toLocaleTimeString('no-NO', { hour: '2-digit', minute: '2-digit' })
    }

    const getEventTime = (event:Event) => {
        const startEventDate = event.start.dateTime ? new Date(event.start.dateTime) : new Date(event.start.date)
        const endEventDate = event.end.dateTime ? new Date(event.end.dateTime) : new Date(event.end.date)
      
         
        const daysToEvent = getDays(startEventDate)
        if (daysToEvent > 1) {
            return `${startEventDate.getDate()}. ${months[startEventDate.getMonth()]} ${event.start.dateTime ? `from ${getTime(startEventDate)} - ${getTime(endEventDate)}` : ''}`
        }
        else if (daysToEvent === 1) {
            return `Tomorrow ${event.start.dateTime ? `from ${getTime(startEventDate)} - ${getTime(endEventDate)}` : ''}`
        }
        else if (daysToEvent === 0) {
            return `Today ${event.start.dateTime ? `at ${getTime(startEventDate)}-${getTime(endEventDate)}` : ''}`
        }
    }

    interface Event {
        start: {
            dateTime: string
            date: string
        };
        end: {
            dateTime: string
            date: string

        };
        summary: string
    }

    return (
        <div>Calendar
            <button id="authorize_button" style={{ display: "block" }}>Authorize</button>
            <button id="signout_button" style={{ display: "none" }}>Sign Out</button>
            <pre id="content" style={{ whiteSpace: "pre-wrap" }}></pre>

            {calendarItems.map((event: Event, i: Key | null | undefined) => {
                return <EventRow key={i} daysToEvent={getDays(event.start.dateTime ? new Date(event.start.dateTime) : new Date(event.start.date))}>
                    <div>{event.summary}</div>
                    <div>{getEventTime(event)}</div>

                </EventRow>
            })}



        </div >
    );
};

export default Calendar;
