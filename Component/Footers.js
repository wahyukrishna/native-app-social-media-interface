import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon} from 'native-base';
class Footers extends Component {
  render() {
    return (
        <Footer>
          <FooterTab style={{backgroundColor: "white"}}>
            <Button>
              <Icon style={{color: "black"}} name="home" />
            </Button>
            <Button>
              <Icon style={{color: "black"}} name="search" />
            </Button>
            <Button>
              <Icon style={{color: "black"}} active name="add" />
            </Button>
            <Button>
              <Icon style={{color: "black"}} name="heart" />
            </Button>
            <Button>
              <Icon style={{color: "black"}} name="person" />
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}

export default Footers;