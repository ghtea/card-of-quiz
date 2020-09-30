/*


          //console.log(listCard.toJS())
          
          const card = fromJS(objCard);
          const showingReward = card.getIn(['reward', 'showing']);
          
          let degRotate = 0;
          if (index===0){
            degRotate = 0;
          }
          else {
            degRotate = ((Math.random() -0.5) * 10);
          }
          
          
          return (
            // https://codepen.io/desandro/pen/LmWoWe    working on animation
            <Div_CardFrame 
              flipped={showingReward}
              indexZ={200-index}
              degRotate={degRotate}
              
              key={`card-frame-index${index}`}
            >
              <CardQuiz
                card={card}
                index={index}
                key={`card-quiz-index${index}`}
                showing={!showingReward}
                
              />
              <CardReward
                card={card}
                index={index}
                key={`card-reward-index${index}`}
                showing={showingReward}
                
              />
            </Div_CardFrame>
          )
        } )}
*/