import Head from "../../../components/Head";
import Nav from "../../../components/dashboard/Nav";
import Footer from "../../../components/dashboard/Footer";
import Button from "../../../components/dashboard/Button";
import { Controller, useForm } from "react-hook-form";
import { Input, TextArea, Selector } from "../../../components/dashboard/Form";
import useUserData from "../../../hooks/useUserData";
import useCategories from "../../../hooks/useCategories";

export default () => {
  const { user, isLoading, isError } = useUserData();
  // const { categories } = useCategories();

  const { register, errors, handleSubmit, control } = useForm();
  let today = new Date();

  if (isError) return <div>An error occured.</div>;
  if (isLoading) return <div>Loading ...</div>;

  const category = {
    label: user.Brand.Category.name,
    value: user.Brand.Category.id,
  };

  function sendData(data) {
    const startDate = new Date();
    console.log(startDate);
    const endDate = new Date();
    const { title, description, brief, categoryId } = data;
    console.log(data);
    fetch("/api/campaign/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        startDate,
        endDate,
        description,
        brief,
        categoryId: categoryId.value,
      }),
    });
  }

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
        <div className="intro__container">
          <h1>Create your new campaign</h1>
          <p>
            Fill in the form below to preview your campaign and start receiving
            applications.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(sendData)}
          className="new-campaign__container"
        >
          <div className="new-campaign__container-col-1">
            <img
              className="new-campaign__form__img"
              src="http://placehold.it/600x450"
              alt=""
            />
          </div>
          <div className="new-campaign__container-col-2">
            <div className="new-campaign__form__input-title">
              <Input
                placeholder="Add a title for your campaign"
                name="title"
                ref={register}
              />
            </div>

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
                  placeholder={today.toLocaleString()}
                  name="startDate"
                  ref={register}
                />
              </div>
              <p className="new-campaign__form__input-inline">End:</p>
              <div className=" new-campaign__form__input-inline">
                <Input
                  placeholder={today.toLocaleString()}
                  name="endDate"
                  ref={register}
                />
              </div>
            </div>
            <div className="new-campaign__form-row">
              <p className="new-campaign__form-row-p">Categories</p>
              <Controller
                as={Selector}
                control={control}
                defaultValue={category}
                name="categoryId"
                // options={categories.map((category) => {
                //   return {
                //     label: category.name,
                //     value: category.id,
                //   };
                // })}
              />
            </div>
            <div className="new-campaign__form-row">
              <p>About the product</p>

              <TextArea
                large
                name="description"
                ref={register}
                placeholder="Tell us a bit about your product"
              />
            </div>

            <div className="new-campaign__form-row">
              <p>Brief</p>

              <TextArea
                large
                name="brief"
                ref={register}
                placeholder="Write a brief for your campaign"
              />

              <p>About the Brand</p>

              <TextArea
                large
                defaultValue={user.Brand.description}
                name="brandDescription"
                ref={register}
              />
            </div>
          </div>
          <div className="new-campaign__form-row-2 new-campaign__form-button">
            <Button type="submit">Create Campaign</Button>
          </div>
        </form>
        <style jsx>{`
          .container {
            margin-bottom: 50px;
          }
          .intro__container {
            display: grid;
            place-items: center;
            margin: 30px 0;
          }
          .new-campaign__container {
            display: grid;
            grid-template-columns: 40% 60%;
            width: 100%;
          }
          .new-campaign__container-col-1 {
            width: 100%;
          }

          .new-campaign__container-col-2 {
            width: 100%;
            padding-left: 40px;
          }

          .new-campaign__form__img {
            height: 100%;
            width: 100%;
          }

          .new-campaign__form__input-title {
            font-size: 30px;
          }
          .new-campaign__form__input-inline {
            display: inline-flex;
            margin-right: 15px;
          }

          .new-campaign__form-row-p {
            margin-top: 40px;
          }

          .new-campaign__form-button {
            text-align: right;
            margin: 30px 0;
          }

          .new-campaign__form-row-2 {
            grid-column: 2;
          }
        `}</style>
      </div>
      <Footer />
    </>
  );
};
