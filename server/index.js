const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  const { counter } = req.body;
  const data = [
    "Attention industry professionals! Are you tired of dealing with the headache of data flow diagrams (DFDs)? Well, fear not! In this how—to guide, we'll break down the convlexities of DFDs arid provide you with a step-by-step process to create them with ease. Whether you're a seasoned pro or a newbie to the world of DFDs, this guide will have you diagrams like a pro in no time. So, grab your coffee and let's dive into the world of DFDs!",
    "Are you tired of the endless hours spent analyzing data for your industry? Look no further' In this how-to guide. well be     dscussing the power of DFDs and how they can transform the way you approach data analysis. Whether youre a seasoned professional or just starting out your industry, this gude is a must-read. So. grab a of coffee md lefs into the world of DFDs.",
  ];
  const ans = [];
  for (var i = 0; i < counter; i++) {
    ans.push(data[i % 2]);
  }
  res.status(200).send(ans);
});

app.listen(8000, () => console.log("listening to 8000"));
