import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      title="A First Meetup"
      image="https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/austin/austin2_copy_1__211bcd0d-a354-4c0f-8203-107ad7774905.jpg"
      address="100 Main Street, 12345 Austin TX"
      description="This is a first meetup!"
    />
  );
}

// needed if using getStatic props for a dynamically routed page
// all versions of page must be pregenerated on build
export async function getStaticPaths() {
  // specify all routes that must be built
  return {
    // false = paths array contains all paths/return 404 to user for invalid path
    // true = will generate new page on request if not in paths array
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {},
    },
  };
}

export default MeetupDetails;
