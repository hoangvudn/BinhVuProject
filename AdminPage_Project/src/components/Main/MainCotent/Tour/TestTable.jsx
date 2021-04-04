.blockNewTour {
  position: absolute;
  top: 200px;
  left: 37%;
  width: 650px;
  height: 350px;
  //background: grey;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  &__title {
      position: relative;
      top: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: gray;
      // background: yellow;
  }
  &__formNew {
      position: absolute;
      display: flex;
      // flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      // background: rebeccapurple;
    
      &__inputLeftItem {
          position: relative;
          margin-top: 20px;
          left: -22%;
      }
      &__inputImageUrl {
          position: relative;
          left: 19px;
          border-top: none;
          border-left: none;
          border-right: none;
      }
      &__inputPlace {
          position: relative;
          left: 50px;
          border-top: none;
          border-left: none;
          border-right: none;
      }
      &__inputTourName {
          position: relative;
          left: 44px;
          border-top: none;
          border-left: none;
          border-right: none;
      }
      &__inputDay {
          position: relative;
          left: 60px;
          border-top: none;
          border-left: none;
          border-right: none;
      }
      //----------------------------Right Item--------------------------------------
      &__inputRightItem {
          position: relative;
          margin-top: 20px;
          left: 10%;
      }
      &__inputTransports {
          position: relative;
          left: 20px;
          border-top: none;
          border-left: none;
          border-right: none;
      }
      &__inputPrice {
          position: relative;
          left: 59px;
          border-top: none;
          border-left: none;
          border-right: none;
      }
      &__inputStart {
          position: relative;
          left: 62px;
          border-top: none;
          border-left: none;
          border-right: none;
      }
      &__inputApply {
          position: relative;
          left: 53px;
          border-top: none;
          border-left: none;
          border-right: none;
      }
  }
  
  &__buttonSave {
      position: absolute;
      top: 210px;
      width: 100px;
      height: 50px;
  }
  &__buttonSave:hover {
      cursor: pointer; 
      background: rgb(9, 206, 75);
      border-radius: 5px;
      box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
  }
}