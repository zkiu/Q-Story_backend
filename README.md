<h1 align="center">Q-Story: Little Inspirations</h1>

<h2 align="center"><a  href="https://q-story.netlify.app/">Try App</a> or <a  href="https://www.loom.com/share/90ca60fd1b07494c9220f33981a71549">Watch Demo (3min video)</a></h2>
<h2 align="center"></h2>
<br/>

## Description

<p align="center">
<img src="https://live.staticflickr.com/65535/51070234872_562cc4e443_b.jpg" width="80%"></p>

Q-Story can be used to helps with creative writing, promote literacy, to zen out, or just for creating silly stories. My wish was for families to use this app together for youth literacy.

The following are the concept for this app:

- An initial random set of image cards are generated to stimulate your creativity.
- You can write down your ideas on each card.
- The cards can be **Dragged and Dropped** to flesh out the story.
- Additional cards can be added (with no limits currently set).
- The image on each card can be switched for another random picture.
- Individual cards can also be deleted.
- 🎦 **Theater Mode** provides an unobstructive way to view the story. (my favourite feature😊)

This project was developed as my capstone project submission for my Web Dev bootcamp in Q1 2021. The initial production build of this project was done in about 2.5 weeks.

You can try it out [HERE](https://q-story.netlify.app/). You can use the App without logging in or registering. However, if you want to save your work, registering is simple, and no email verification is required.

You can find out more about project and myself on the About Page of the app.

## The tools

<p align="center">
<img src="https://live.staticflickr.com/65535/51071585428_d0f8af6197_c.jpg" width="100%"></p>

### Front-End

- This SPA was built using React.
- Styling was done with SASS.
- The drag and drop was achieved using the **amazing** 😲 react-beautiful-dnd.
- Login/Registration was done via Firebase Authentication.
- This SPA is hosted on Netlify.

### Back-End

- Node + Express does the routing.
- Firebase Firestore and Authentication do the heavy lifting.
  - Auth - Restricts access to most endpoints.
  - Firestore - Provides a really easy to us NoSQL database.
- The server is hosted on the free tier plan at Heroku. As such, initial access to the app is slow because the dyno could be sleeping 😥.

### Registration

This App only requires minimal user information to register and create an account. For example, email validation is not required. This was an intentional decision in the design.

The content kept in the database (the stories and the associated pictures) are not confidential documents. This app tries to reduce any barriers to enjoy the content.

### Database

The Firestore data is stored as such:

```
/users/<user doc>/projects/<project doc>
```

Each project document contains the following object:

```
{
	cards: [array of card],
	dateCreated,
	title,
}
```

Each card in the array contains the following object:

```
{
	imageID,
	height,
	width,
	imgSmall,
	imgMed,
	imgLg,
	paragraph
}
```

Pros:

- I found that receiving and writing data to be really easy for the purpose of this app.
- Restricting access is really straight forward to. Project documents can't be accessed without the user ID. The user ID is determined from the auth token sent from the client side.

Cons:

- This makes implementing a sharing feature for your story in Theater Mode with a 3rd party tricky. Firebase's collectionGroup() method might help overcome this.

### Intergration with 3rd Party Image API

Backend -> Queries the https://www.pexels.com/ API and receives a JSON response of image data.

Frontend -> Loads the image urls from the Pexels server.

## Future scope

- Donations to pay for a responsive server and hosting space.
- Implementing the sharing of the Theater Mode output to others without logging-in requirements.
- Add card animations.
- Instead of a server, migrate to using Google Functions. Netlify seems to offer something similar, which also happens to be called Functions.
- Move away from a 3rd party image API -> instead host our own database of images (📢 call out to all the artist who wants to showcase their work. I am thinking of tilting the images/illustrations to be more youth centric.)
- A themes option to select the types of random images received.

## Contributions are Welcome

- Donations for hosting
- UX/UI help to make the interface more appealing
- Unique illustrations from Artists. You can sign your images, for accreditation.

## Contact

[Linked-In](https://www.linkedin.com/in/devkiu/)

😉 I am also looking for work
