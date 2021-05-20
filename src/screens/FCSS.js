import React from 'react';
import {Container, Header, Content, Card, CardItem, Body, Text} from 'native-base';

function FCSS(){
    return(
        <Container>
        <Header />
        <Content>
          <Card>
            <CardItem header>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  //Your text here
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>GeekyAnts</Text>
            </CardItem>
         </Card>
        </Content>
      </Container>
    )
}

export default FCSS