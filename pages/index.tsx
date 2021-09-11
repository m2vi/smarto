import auth from '@utils/security/auth';

const Index = () => null;

export async function getServerSideProps({ req }) {
  const token = await auth.pageAuth(req);
  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
    };
  } else {
    return {
      redirect: {
        permanent: false,
        destination: '/s/discover',
      },
    };
  }
}

export default Index;
