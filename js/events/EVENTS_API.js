const events = [
    {
        id: 0,
        title: 'Event 1',
        type: 'meeting',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda distinctio dolor doloremque, ea est fugiat in ipsum, nemo nihil officia porro possimus, quam quasi quia rerum sunt unde veritatis!',
        time: '2022-06-10T19:48:51+0000',
        location: 'Lviv'
    },
    {
        id: 1,
        title: 'Event 2',
        type: 'QA',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda distinctio dolor doloremque, ea est fugiat in ipsum, nemo nihil officia porro possimus, quam quasi quia rerum sunt unde veritatis!',
        time: '2022-06-18T19:48:51+0000',
        location: 'Lviv',
    },
    {
        id: 2,
        title: 'Event 3',
        type: 'conference',
        location: 'Lviv',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda distinctio dolor doloremque, ea est fugiat in ipsum, nemo nihil officia porro possimus, quam quasi quia',
        time: '2022-06-23T19:48:51+0000'
    },
    {
        id: 3,
        title: 'Event 4',
        type: 'webinar',
        location: 'Lviv',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda distinctio dolor doloremque, ea est fugiat in ipsum, nemo nihil officia porro possimus, quam quasi quia',
        time: '2022-06-29T09:45:00+0000'
    },
    {
        id: 4,
        title: 'Event 5',
        type: 'QA',
        location: 'Lviv',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda distinctio dolor doloremque, ea est fugiat in ipsum, nemo nihil officia porro possimus, quam quasi quia rerum sunt unde veritatis!',
        time: '2022-07-03T14:30:00+0000',
    },
    {
        id: 5,
        title: 'Event 6',
        type: 'webinar',
        location: 'Lviv',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda distinctio dolor doloremque, ea est fugiat in ipsum, nemo nihil officia porro possimus, quam quasi quia rerum sunt unde veritatis!',
        time: '2022-07-05T12:15:00+0000'
    },
    {
        id: 6,
        title: 'Event 7',
        type: 'meeting',
        location: 'Lviv',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda distinctio dolor doloremque, ea est fugiat in ipsum, nemo nihil officia porro possimus, quam quasi quia rerum sunt unde veritatis!',
        time: '2022-07-26T16:00:00+0000'
    },
    {
        id: 7,
        title: 'Event 8',
        type: 'QA',
        location: 'Lviv',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda distinctio dolor doloremque, ea est fugiat in ipsum, nemo nihil officia porro possimus, quam quasi quia rerum sunt unde veritatis!',
        time: '2022-07-18T10:00:00+0000'
    },
    {
        id: 8,
        title: 'Event 9',
        type: 'QA',
        location: 'Lviv',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda distinctio dolor doloremque, ea est fugiat in ipsum, nemo nihil officia porro possimus, quam quasi quia rerum sunt unde veritatis!',
        time: '2022-08-06T21:05:00+0000'
    },
    {
        id: 9,
        title: 'Event 10',
        type: 'conference',
        location: 'Lviv',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda distinctio dolor doloremque, ea est fugiat in ipsum, nemo nihil officia porro possimus, quam quasi quia rerum sunt unde veritatis!',
        time: '2022-08-12T09:10:00+0000'
    },
    {
        id: 10,
        title: 'Event 11',
        type: 'conference',
        location: 'Lviv',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda distinctio dolor doloremque, ea est fugiat in ipsum, nemo nihil officia porro possimus, quam quasi quia rerum sunt unde veritatis!',
        time: '2022-09-12T09:10:00+0000'
    },
    {
        id: 11,
        title: 'Event 12',
        type: 'webinar',
        location: 'Lviv',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda distinctio dolor doloremque, ea est fugiat in ipsum, nemo nihil officia porro possimus, quam quasi quia rerum sunt unde veritatis!',
        time: '2022-10-22T09:10:00+0000'
    },
    {
        id: 12,
        title: 'Event 13',
        type: 'conference',
        location: 'Lviv',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda distinctio dolor doloremque, ea est fugiat in ipsum, nemo nihil officia porro possimus, quam quasi quia rerum sunt unde veritatis!',
        time: '2022-09-06T09:10:00+0000'
    },
    {
        id: 13,
        title: 'Event 14',
        type: 'webinar',
        location: 'Lviv',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda distinctio dolor doloremque, ea est fugiat in ipsum, nemo nihil officia porro possimus, quam quasi quia rerum sunt unde veritatis!',
        time: '2022-09-24T09:10:00+0000'
    },
    {
        id: 14,
        title: 'Event 15',
        type: 'QA',
        location: 'Lviv',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda distinctio dolor doloremque, ea est fugiat in ipsum, nemo nihil officia porro possimus, quam quasi quia rerum sunt unde veritatis!',
        time: '2022-11-12T10:10:00+0000'
    },
    {
        id: 15,
        title: 'Event 16',
        type: 'conference',
        location: 'Lviv',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda distinctio dolor doloremque, ea est fugiat in ipsum, nemo nihil officia porro possimus, quam quasi quia rerum sunt unde veritatis!',
        time: '2022-10-05T09:10:00+0000'
    },
    {
        id: 16,
        title: 'Event 17',
        type: 'webinar',
        location: 'Lviv',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda distinctio dolor doloremque, ea est fugiat in ipsum, nemo nihil officia porro possimus, quam quasi quia rerum sunt unde veritatis!',
        time: '2022-08-12T09:10:00+0000'
    },
    {
        id: 17,
        title: 'Event 18',
        type: 'conference',
        location: 'Lviv',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda distinctio dolor doloremque, ea est fugiat in ipsum, nemo nihil officia porro possimus, quam quasi quia rerum sunt unde veritatis!',
        time: '2022-11-02T09:10:00+0000'
    },
    {
        id: 18,
        title: 'Event 19',
        type: 'conference',
        location: 'Lviv',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda distinctio dolor doloremque, ea est fugiat in ipsum, nemo nihil officia porro possimus, quam quasi quia rerum sunt unde veritatis!',
        time: '2022-08-18T09:10:00+0000'
    },
    {
        id: 19,
        title: 'Event 20',
        type: 'QA',
        location: 'Lviv',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda distinctio dolor doloremque, ea est fugiat in ipsum, nemo nihil officia porro possimus, quam quasi quia rerum sunt unde veritatis!',
        time: '2022-09-08T09:10:00+0000'
    },
    {
        id: 20,
        title: 'Event 21',
        type: 'QA',
        location: 'Lviv',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda distinctio dolor doloremque, ea est fugiat in ipsum, nemo nihil officia porro possimus, quam quasi quia rerum sunt unde veritatis!',
        time: '2022-11-16T16:10:00+0000'
    },
    {
        id: 21,
        title: 'Event 22',
        type: 'conference',
        location: 'Lviv',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda distinctio dolor doloremque, ea est fugiat in ipsum, nemo nihil officia porro possimus, quam quasi quia rerum sunt unde veritatis!',
        time: '2022-10-11T09:10:00+0000'
    },
    {
        id: 22,
        title: 'Event 23',
        type: 'QA',
        location: 'Lviv',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda distinctio dolor doloremque, ea est fugiat in ipsum, nemo nihil officia porro possimus, quam quasi quia rerum sunt unde veritatis!',
        time: '2022-11-21T09:10:00+0000'
    },
    {
        id: 23,
        title: 'Event 24',
        type: 'webinar',
        location: 'Lviv',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda distinctio dolor doloremque, ea est fugiat in ipsum, nemo nihil officia porro possimus, quam quasi quia rerum sunt unde veritatis!',
        time: '2022-10-07T11:10:00+0000'
    }

]
export default events
