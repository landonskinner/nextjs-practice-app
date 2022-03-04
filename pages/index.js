import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/austin/austin2_copy_1__211bcd0d-a354-4c0f-8203-107ad7774905.jpg",
    address: "100 Main Street, 12345 Austin TX",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/austin/austin2_copy_1__211bcd0d-a354-4c0f-8203-107ad7774905.jpg",
    address: "100 Main Street, 12345 Austin TX",
    description: "This is a second meetup!",
  },
  {
    id: "m3",
    title: "A Third Meetup",
    image:
      "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/austin/austin2_copy_1__211bcd0d-a354-4c0f-8203-107ad7774905.jpg",
    address: "100 Main Street, 12345 Austin TX",
    description: "This is a third meetup!",
  },
];

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
  // need to return data in form of object with props as key
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    // specifies frequency of data refetching after build
    revalidate: 10,
  };
}

export default HomePage;
