import Head from "../../components/Head";
import Nav from "../../components/dashboard/Nav";
import Footer from "../../components/dashboard/Footer";
import Button from "../../components/dashboard/Button";
import Campaigns from "../../components/dashboard/Campaigns";
import InlineEdit from "../../components/dashboard/InlineEdit";
import TextAreaEdit from "../../components/dashboard/TextAreaEdit";
import Selector from "../../components/dashboard/Selector";

const user = {
  id: 1,
  name: "Laura Carballo",
  email: "laura.carballo14@gmail.com",
  Creator: {
    id: 24234,
    displayName: "Laura Carballo",
    location: "Sydney, Australia",
    instagramId: "lauracarballo14",
    followerCount: "20k",
    engagement: "6%",
    imageUrl:
      "https://scontent.fsyd6-1.fna.fbcdn.net/v/t31.0-1/s200x200/22713434_10155593816245196_5986545229485056165_o.jpg?_nc_cat=107&_nc_sid=7206a8&_nc_ohc=uh-sXvT2MvEAX_o31_C&_nc_ht=scontent.fsyd6-1.fna&tp=7&oh=231ea1b01b1edc1ccfe812e94da59375&oe=5F6DFDFB",
    bio: `Hi I'm Laura, I'm aiming to live a plastic free life. Im a law and business graduate currently learning a new set of skills through web development. Using technology to advocate about climate change and social issues has become my biggest concern.`,
    advocates: [
      {
        label: "Watermelon",
        value: "Watermelon",
      },
    ],
    status: "ACCEPTED",
    Application: [
      {
        id: 24321,
        status: "ACCEPTED",
        Campaign: {
          id: 124234,
          title: "Sustainable Summer",
          imageUrl:
            "https://instagram.fsyd6-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/75231099_126848368398615_7659284112876110944_n.jpg?_nc_ht=instagram.fsyd6-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=GVhKe0DK4rUAX85W08D&oh=a054526545b271033a175340e0d4a19f&oe=5F72AA7D",
          startDate: "2020-10-01T07:30:00.000Z",
          endDate: "2020-10-10T07:30:00.000Z",
          brief:
            "Take a picture with your favourite COCOCO product and upload it to Instagram before the end of the campaign.",
          status: "ACCEPTED",
          Brand: {
            id: 95324,
            name: "COCOCO Life",
            description:
              "COCOCO - Sustainable living 🌿 Sustainability & Zero Waste Blog 🤤 Vegan Recipes",
            logoUrl:
              "https://instagram.fsyd6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/71174853_1235414673326679_1455648340275363840_n.jpg?_nc_ht=instagram.fsyd6-1.fna.fbcdn.net&_nc_ohc=YHJ4MuJ8imQAX84PSbY&oh=2f81134ad420eb8a54a356145d5d8d8e&oe=5F71A1C2",
          },
          Category: {
            name: "Health & Wellbeing",
          },
        },
      },
      {
        id: 24311,
        status: "ACCEPTED",
        Campaign: {
          id: 124234,
          title: "Fresh Summer, Fresh Kicks",
          imageUrl:
            "https://instagram.fsyd6-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/117672789_804226356988284_7061901989645200226_n.jpg?_nc_ht=instagram.fsyd6-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=DEWlBNa-VWcAX-NTSsX&oh=13ec4bbbd2f426a373b0212f6c11c9a6&oe=5F72EA22",
          startDate: "2020-11-01T07:30:00.000Z",
          endDate: "2020-11-10T07:30:00.000Z",
          brief:
            "Send us an email at creators@allbirds.com with your shoe size and we'll send you some kicks, take a snap of them and upload it to Instagram before the end of the campaign.",
          status: "ACCEPTED",
          Brand: {
            id: 95324,
            name: "Allbirds",
            description:
              "At Allbirds, we make better things in a better way using premium natural materials.",
            logoUrl:
              "https://instagram.fsyd6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/74606945_907553572979666_5337821699482058752_n.jpg?_nc_ht=instagram.fsyd6-1.fna.fbcdn.net&_nc_ohc=ZqkhdwTG2tQAX_v91Gn&oh=c03874a71929472e59f0630b41e4f0a3&oe=5F732E79",
          },
          Category: {
            name: "Fashion",
          },
        },
      },
    ],
  },
};

export default () => {
  function handleConfirm(internalValue) {
    return internalValue;
  }
  function handleSelect(items) {
    return items;
  }

  return (
    <>
      <Head />
      <Nav />
      <div className="container">
        <div className="intro">
          <div className="intro__content">
            <img
              className="intro__content__img"
              src={user.Creator.imageUrl}
              alt=""
            />
            <div className="intro__content__info">
              <div className="intro__content__username">
                <InlineEdit
                  defaultValue={user.name}
                  onConfirm={handleConfirm}
                />
              </div>

              <p className="intro__content__location">
                <i className="fas fa-map-marker-alt fab-margin"></i>
                <InlineEdit
                  defaultValue={user.Creator.location}
                  onConfirm={handleConfirm}
                />
              </p>
            </div>
          </div>
          <div className="intro__instagram">
            <Button style={{ width: "100%" }} href="/">
              <span className="fab-margin">
                <i className="fab fa-instagram"></i>
              </span>
              {user.Creator.instagramId}
            </Button>
            <div className="intro__instagram__stats">
              <div className="intro__instagram__stats-column">
                <span>Followers</span>
                <p className="intro__instagram__stats-number">
                  {user.Creator.followerCount}
                </p>
              </div>
              <div className="intro__instagram__stats-column">
                <span>Engagement</span>
                <p className="intro__instagram__stats-number">
                  {user.Creator.engagement}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="profile__info">
          <div className="about">
            <h3 className="underline m50">About</h3>

            <p>
              <TextAreaEdit
                defaultValue={user.Creator.bio}
                onConfirm={handleSelect}
              />
            </p>
          </div>
          <div className="advocate">
            <h3 className="underline m50">Fruits</h3>
            <p>
              <Selector
                defaultValue={user.Creator.advocates}
                onConfirm={handleSelect}
              />
            </p>
          </div>
        </div>

        <h3 className="underline">Campaigns</h3>
        <div className="campaings-row">
          {user.Creator.Application.filter(
            (application) => application.status == "ACCEPTED"
          ).map((application) => (
            <Campaigns
              img={application.Campaign.imageUrl}
              title={application.Campaign.title}
              brandName={application.Campaign.Brand.name}
              endOfCampaign={new Date(
                application.Campaign.endDate
              ).toLocaleString()}
            />
          ))}
        </div>

        <style jsx>{`
          .profile__info {
            display: grid;
            grid-template-columns: 60% 40%;
          }
          .advocate {
            padding-left: 70px;
          }
          .intro {
            display: flex;
            justify-content: space-between;
            padding-top: 50px;
          }
          .intro__content {
            display: flex;
          }
          .intro__content__img {
            border-radius: 100px;
            height: 200px;
            width: 200px;
          }
          .intro__content__info {
            padding: 20px 40px;
          }
          .intro__instagram {
            align-self: center;
            text-align: center;
            font-size: 20px;
            padding-right: 120px;
          }
          .intro__content__username-container {
            display: flex;
          }
          .intro__content__username {
            font-weight: 700;
            font-size: 35px;
            line-height: 48px;
          }
          .fab-margin {
            margin-right: 10px;
          }

          .intro__instagram__stats {
            display: flex;
          }
          .intro__instagram__stats-column {
            padding: 10px;
          }
          .intro__instagram__stats-number {
            margin-block-end: 0px;
          }
          .campaings-row {
            display: flex;
            justify-content: left;
            height: fit-content;
          }
        `}</style>
      </div>
      <Footer />
    </>
  );
};
