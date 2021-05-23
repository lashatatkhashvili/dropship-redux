import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { helpAction } from "../actions/helpAction";
import helpData from "../helpData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { Div, CloseBtn, Info, ListItem } from "../styles/helpStyle";

export default function Help() {
  const [activeData, setActiveData] = useState(helpData[0]);
  const { isVisible } = useSelector((state) => state.help);
  const { heading, paragraph, id, video } = activeData;

  const dispatch = useDispatch();

  const findActive = (id) => {
    const data = helpData.find((item) => item.id === id);
    setActiveData(data);
  };

  const toggleHelp = () => {
    dispatch(helpAction());
  };

  return (
    <Div>
      <button className="help-btn" onClick={toggleHelp}>
        <FontAwesomeIcon icon={faQuestion} />
      </button>
      <Info visible={isVisible}>
        <CloseBtn visible={isVisible} onClick={toggleHelp}>
          X
        </CloseBtn>
        <nav>
          <ul>
            {helpData.map((item) => (
              <ListItem
                key={item.id}
                active={id === item.id}
                onClick={() => findActive(item.id)}
              >
                {item.name}
              </ListItem>
            ))}
          </ul>
        </nav>
        <main className="help-main">
          <h2>{heading}</h2>
          <p>{paragraph}</p>
          <video controls loop width="100%" key={`/assets/${video}.mp4`}>
            <source src={`/assets/${video}.mp4`} type="video/mp4"></source>
            Your browser does not support HTML5 video.
          </video>

          <div className="help-more">
            <h3>Not quite what you are looking for?</h3>
            <button>Get Help</button>
          </div>
        </main>
      </Info>
    </Div>
  );
}
