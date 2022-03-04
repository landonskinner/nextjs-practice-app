import { MongoClient } from 'mongodb'
import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// // only runs on server, not client -> runs on every request
// // best for data that changes frequently
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

// specifically structured function for page pre-rendering with data
export async function getStaticProps() {

  const client = await MongoClient.connect('mongodb+srv://landonskinner:I9IXYnbfGaqZu0dt@cluster0.ibkl3.mongodb.net/meetups?retryWrites=true&w=majority')
  const db = client.db()

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  // need to return data in form of object with props as key
  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      }))
    },
    // specifies frequency of data refetching after build
    revalidate: 10,
  };
}

export default HomePage;
