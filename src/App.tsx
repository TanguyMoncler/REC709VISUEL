import { SimpleHeader } from "./components/SimpleHeader";
import { PhotoMasonry } from "./components/PhotoMasonry";

import photo1 from "./assets/photo (1).jpg";
import photo2 from "./assets/photo (2).jpg";
import photo3 from "./assets/photo (3).jpg";
import photo4 from "./assets/photo (4).jpg";
import photo5 from "./assets/photo (5).jpg";
import photo6 from "./assets/photo (6).jpg";
import photo7 from "./assets/photo (7).jpg";
import photo8 from "./assets/photo (8).jpg";
import photo9 from "./assets/photo (9).jpg";
import photo10 from "./assets/photo (10).jpg";
import photo11 from "./assets/photo (11).jpg";
import photo12 from "./assets/photo (12).jpg";
import photo13 from "./assets/photo (13).jpg";
import photo14 from "./assets/photo (14).jpg";
import photo15 from "./assets/photo (15).jpg";
import photo16 from "./assets/photo (16).jpg";
import photo17 from "./assets/photo (17).jpg";
import photo18 from "./assets/photo (18).jpg";
import photo19 from "./assets/photo (19).jpg";
import photo20 from "./assets/photo (20).jpg";
import photo21 from "./assets/photo (21).jpg";
import photo22 from "./assets/photo (22).jpg";
import photo23 from "./assets/photo (23).jpg";
import photo24 from "./assets/photo (24).jpg";
import photo25 from "./assets/photo (25).jpg";
import photo26 from "./assets/photo (26).jpg";
import photo27 from "./assets/photo (27).jpg";
import photo28 from "./assets/photo (28).jpg";
import photo29 from "./assets/photo (29).jpg";
import photo30 from "./assets/photo (30).jpg";
import photo31 from "./assets/photo (31).jpg";
import photo32 from "./assets/photo (32).jpg";
import photo33 from "./assets/photo (33).jpg";
import photo34 from "./assets/photo (34).jpg";
import photo35 from "./assets/photo (35).jpg";
import photo36 from "./assets/photo (36).jpg";


export default function App() {
  const photos = [
    {
      id: 1,
      url: photo1,
      title: "Title",
      photographer: "Nelson Charles",
    },
    {
      id: 2,
      url: photo2,
      title: "Title",
      photographer: "Nelson Charles",
    },
    {
      id: 3,
      url: photo3,
      title: "Title",
      photographer: "Nelson Charles",
    },
    {
      id: 4,
      url: photo4,
      title: "Title",
      photographer: "Nelson Charles",
    },
    {
      id: 5,
      url: photo5,
      title: "Title",
      photographer: "Nelson Charles",
    },
	    {
      id: 6,
      url: photo6,
      title: "Title",
      photographer: "Nelson Charles",
    },
	    {
      id: 7,
      url: photo7,
      title: "Title",
      photographer: "Nelson Charles",
    },
	    {
      id: 8,
      url: photo8,
      title: "Title",
      photographer: "Nelson Charles",
    },
	    {
      id: 9,
      url: photo9,
      title: "Title",
      photographer: "Nelson Charles",
    },
	    {
      id: 10,
      url: photo10,
      title: "Title",
      photographer: "Nelson Charles",
    },
	    {
      id: 11,
      url: photo11,
      title: "Title",
      photographer: "Nelson Charles",
    },
	    {
      id: 12,
      url: photo12,
      title: "Title",
      photographer: "Nelson Charles",
    },
	  	{
      id: 13,
      url: photo13,
      title: "Title",
      photographer: "Nelson Charles",
    },
		{
      id: 14,
      url: photo14,
      title: "Title",
      photographer: "Nelson Charles",
    },
	    {
      id: 15,
      url: photo15,
      title: "Title",
      photographer: "Nelson Charles",
    },
	    {
      id: 16,
      url: photo16,
      title: "Title",
      photographer: "Nelson Charles",
    },
	  	{
      id: 17,
      url: photo17,
      title: "Title",
      photographer: "Nelson Charles",
    },
	  	{
      id: 18,
      url: photo18,
      title: "Title",
      photographer: "Nelson Charles",
    },
	      {
      id: 19,
      url: photo19,
      title: "Title",
      photographer: "Nelson Charles",
    },
    {
      id: 20,
      url: photo20,
      title: "Title",
      photographer: "Nelson Charles",
    },
    {
      id: 21,
      url: photo21,
      title: "Title",
      photographer: "Nelson Charles",
    },
    {
      id: 22,
      url: photo22,
      title: "Title",
      photographer: "Nelson Charles",
    },
    {
      id: 23,
      url: photo23,
      title: "Title",
      photographer: "Nelson Charles",
    },
    {
      id: 24,
      url: photo24,
      title: "Title",
      photographer: "Nelson Charles",
    },
    {
      id: 25,
      url: photo25,
      title: "Title",
      photographer: "Nelson Charles",
    },
    {
      id: 26,
      url: photo26,
      title: "Title",
      photographer: "Nelson Charles",
    },
    {
      id: 27,
      url: photo27,
      title: "Title",
      photographer: "Nelson Charles",
    },
    {
      id: 28,
      url: photo28,
      title: "Title",
      photographer: "Nelson Charles",
    },
    {
      id: 29,
      url: photo29,
      title: "Title",
      photographer: "Nelson Charles",
    },
    {
      id: 30,
      url: photo30,
      title: "Title",
      photographer: "Nelson Charles",
    },
    {
      id: 31,
      url: photo31,
      title: "Title",
      photographer: "Nelson Charles",
    },
    {
      id: 32,
      url: photo32,
      title: "Title",
      photographer: "Nelson Charles",
    },
    {
      id: 33,
      url: photo33,
      title: "Title",
      photographer: "Nelson Charles",
    },
    {
      id: 34,
      url: photo34,
      title: "Title",
      photographer: "Nelson Charles",
    },
    {
      id: 35,
      url: photo35,
      title: "Title",
      photographer: "Nelson Charles",
    },
    {
      id: 36,
      url: photo36,
      title: "Title",
      photographer: "Nelson Charles",
    },
  ];
return (
  <div className="min-h-screen" style={{ backgroundColor: "#EDE8D0" }}>
    <SimpleHeader />
    <PhotoMasonry initialPhotos={photos} />
  </div>
);
