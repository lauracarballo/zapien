import { useRouter } from "next/router";
import Head from "../../../components/Head";
import Nav from "../../../components/dashboard/Nav";
import Footer from "../../../components/dashboard/Footer";
import Button from "../../../components/dashboard/Button";
import Campaigns from "../../../components/dashboard/Campaigns";
import ScrollRow from "../../../components/dashboard/ScrollRow";
import useUserData from "../../../hooks/useUserData";

export default () => {
  const router = useRouter();
  const { id } = router.query;

  const { user, isLoading, isError } = useUserData();

  if (isError) return <div>An error occured.</div>;
  if (isLoading) return <div>Loading ...</div>;

  return (
    <>
      <Head />
      <Nav
        links={[
          {
            name: "Dashboard",
            href: "/brands/dashboard",
          },
          {
            name: "Campaigns",
            href: "/brands/dashboard",
          },
        ]}
      />
      <div className="container">
        <div className="brand__dashboard">
          <h2>{user.Brand.name}</h2>
          <p>Ready to launch your next campaign</p>
          <Button href="/brands/newCampaign">Create a new campaign</Button>
        </div>

        <h3 className="underline">Upcoming Campaigns</h3>
        <ScrollRow>
          {user.Brand.Campaign.map((Campaign) => (
            <Campaigns
              img={Campaign.imageUrl}
              title={Campaign.title}
              endOfCampaign={new Date(Campaign.endDate).toLocaleString()}
            />
          ))}
        </ScrollRow>

        <style jsx>{`
          .brand__dashboard {
            display: grid;
            place-items: center;
            padding: 50px 0px;
          }
        `}</style>
      </div>
      <Footer />
    </>
  );
};
