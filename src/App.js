import React from 'react';
import Console from './Console'
import logo from './logo.svg';
import './App.css';
import Reptar from './logo-white.png'
import Brim from 'brim'

function App() {
  return (
    <div className="App">
      <img class="reptar-head" src={Reptar} />
      <Console
        commands={[
          {
            prompt: "Every day, US vehicles emit 564 billion pounds of CO2."
          },
          {
            prompt: "Put your best foot forward & own your footprint with Reptar.org."
          },
          {
            prompt: "Reptar.org. Offsets as you go, for pennies per mile.",
            input: {
              type: "radio",
              options: ["Get a Free Sticker", "Download the App", "Footprint Calculator"]
            }

          },
          {
            prompt: "Get your free footprint sticker after a short quiz."
          },
          {
            prompt: "1. How often do you drive your car?",
            input: {
              type: "radio",
              options: ["Hardly ever", "Once a week", "Every day", "I commute to work"]
            }
          },
          {
            prompt: "2. What is your average gas mileage?",
            input: {
              type: "radio",
              options: ["<18 mpg", "19-23 mpg", "24-27 mpg", "28-34 mpg", "35+ mpg",]
            }
          },
          {
            prompt: "Calculating...... Done!"
          },
          {
            prompt: "It would only cost you $5.66 a month to offset your footprint.",
            input: {
              type: "radio",
              options: ["Pay with Credit Card", "Venmo", "PayPal", "Credit Card", "I just want a sticker"]
            }
          },
          {
            prompt: "Your sticker is on the way.",
          }
        ]}

      ></Console>
    </div>
  );
}

export default App;
