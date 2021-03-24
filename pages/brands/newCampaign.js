import Head from "../../components/Head";
import Nav from "../../components/dashboard/Nav";
import Footer from "../../components/dashboard/Footer";
import Button from "../../components/dashboard/Button";
import { useForm } from "react-hook-form";
import { Input, TextArea, Selector } from "../../components/dashboard/Form";

const user = {
  id: 1,
  name: "Laura Carballo",
  email: "laura.carballo14@gmail.com",
  Brand: {
    id: 1234,
    name: "COCOCO",
    description:
      "COCOCO - Sustainable living 🌿 Sustainability & Zero Waste Blog 🤤 Vegan Recipes",
    logoUrl:
      "https://instagram.fsyd6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/71174853_1235414673326679_1455648340275363840_n.jpg?_nc_ht=instagram.fsyd6-1.fna.fbcdn.net&_nc_ohc=YHJ4MuJ8imQAX84PSbY&oh=2f81134ad420eb8a54a356145d5d8d8e&oe=5F71A1C2",
    status: "ACCEPTED",
    Category: [
      {
        label: "Health & Wellbeing",
        value: "Health & Wellbeing",
      },
    ],
    Campaigns: [
      {
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
          name: "Green Life",
          description:
            "COCOCO - Sustainable living 🌿 Sustainability & Zero Waste Blog 🤤 Vegan Recipes",
          logoUrl:
            "https://instagram.fsyd6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/71174853_1235414673326679_1455648340275363840_n.jpg?_nc_ht=instagram.fsyd6-1.fna.fbcdn.net&_nc_ohc=YHJ4MuJ8imQAX84PSbY&oh=2f81134ad420eb8a54a356145d5d8d8e&oe=5F71A1C2",
        },
        Category: {
          label: "Health & Wellbeing",
          value: "Health & Wellbeing",
        },
        Application: [
          {
            id: 345,
            status: "PENDING",
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
                  label: "Intersectional Environmentalist",
                  value: "Intersectional Environmentalist",
                },
              ],
            },
          },
        ],
      },
      {
        id: 12423,
        title: "Sustainable Winters",
        imageUrl:
          "https://instagram.fsyd6-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/75231099_126848368398615_7659284112876110944_n.jpg?_nc_ht=instagram.fsyd6-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=GVhKe0DK4rUAX85W08D&oh=a054526545b271033a175340e0d4a19f&oe=5F72AA7D",
        startDate: "2020-10-01T07:30:00.000Z",
        endDate: "2020-10-10T07:30:00.000Z",
        brief:
          "Take a picture with your favourite COCOCO product and upload it to Instagram before the end of the campaign.",
        status: "PENDING",
        Brand: {
          id: 95324,
          name: "Green Life",
          description:
            "COCOCO - Sustainable living 🌿 Sustainability & Zero Waste Blog 🤤 Vegan Recipes",
          logoUrl:
            "https://instagram.fsyd6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/71174853_1235414673326679_1455648340275363840_n.jpg?_nc_ht=instagram.fsyd6-1.fna.fbcdn.net&_nc_ohc=YHJ4MuJ8imQAX84PSbY&oh=2f81134ad420eb8a54a356145d5d8d8e&oe=5F71A1C2",
        },
        Category: {
          name: "Health & Wellbeing",
        },
      },
    ],
  },
};

export default () => {
  const { register, errors, handleSubmit } = useForm();
  let today = new Date();

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
            href: "/brands/newCampaign",
          },
        ]}
      />
      <div className="container">
        <p>Fill in the form to preview your new campaign</p>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
            fetch("/api/campaign/create", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data),
            });
          })}
          className="new-campaign__container"
        >
          <div className="new-campaign__container-col">
            <img
              className="new-campaign__form__img"
              src="http://placehold.it/500x450"
              alt=""
            />
            <p>About the Brand</p>

            <TextArea
              large
              defaultValue={user.Brand.description}
              name="aboutBrand"
              ref={register}
            />
          </div>
          <div className="new-campaign__container-col">
            <Input defaultValue="Add a title" name="title" ref={register} />

            <div className="new-campaign__form-row">
              <p className="new-campaign__form__input-inline">a campaign by:</p>
              <div className="new-campaign__form__input-inline">
                <Input
                  defaultValue={user.Brand.name}
                  name="name"
                  ref={register}
                />
              </div>
            </div>
            <div className="new-campaign__form-row underline">
              <p className="new-campaign__form__input-inline">Start:</p>
              <div className="new-campaign__form__input-inline">
                <Input
                  defaultValue={today.toLocaleString()}
                  name="startDate"
                  ref={register}
                />
              </div>
              <p className="new-campaign__form__input-inline">End:</p>
              <div className=" new-campaign__form__input-inline">
                <Input
                  defaultValue={today.toLocaleString()}
                  name="endDate"
                  ref={register}
                />
              </div>
            </div>
            <div className="new-campaign__form-row">
              <p className="new-campaign__form-row-p">Categories</p>

              <Selector
                defaultValue={user.Brand.Category}
                name="categoryId"
                ref={register}
              />
            </div>
            <div className="new-campaign__form-row">
              <p>About the product</p>

              <TextArea
                large
                defaultValue={"Insert a description"}
                name="description"
                ref={register}
              />
            </div>
            <div className="new-campaign__form-row">
              <p>Brief</p>

              <TextArea
                large
                defaultValue={"Insert a description"}
                name="brief"
                ref={register}
              />
            </div>
            <div className="new-campaign__form-row new-campaign__form-button">
              <Button type="submit">Create Campaign</Button>
            </div>
          </div>

          <style jsx>{`
            .new-campaign__container {
              display: grid;
              grid-template-columns: 50% 50%;
            }
            .new-campaign__container-col {
              margin-right: 40px;
            }

            .new-campaign__form-row {
              margin: 10px 0;
            }
            .new-campaign__form__input {
              border-radius: 3px;
              border: 1px solid rgb(223, 225, 230);
              font-weight: inherit;
              font-size: inherit;
              padding: 5px 10px;
              line-height: inherit;
              box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
                rgba(9, 30, 66, 0.31) 0px 0px 1px;
            }
            .new-campaign__form__img {
              min-height: 447px;
              max-height: 447px;
              width: 100%;
            }

            .new-campaign__form__input-inline {
              display: inline-flex;
              margin-right: 15px;
            }

            .new-campaign__form-row-p {
              margin-top: 30px;
            }

            .new-campaign__form-button {
              text-align: right;
              padding-top: 30px;
            }
          `}</style>
        </form>
      </div>
      <Footer />
    </>
  );
};
