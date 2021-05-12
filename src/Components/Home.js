import React from 'react'
import { Header, Image,Divider, Container } from 'semantic-ui-react'
import i1 from '../homeImage/1.jpg';
import i2 from '../homeImage/2.jpg';
import i3 from '../homeImage/3.jpg';
import i4 from '../homeImage/4.jpg';
import i5 from '../homeImage/5.jpg';
import i6 from '../homeImage/6.jpg';
import i7 from '../homeImage/7.jpg';
import i8 from '../homeImage/8.jpg';
import i9 from '../homeImage/9.jpg';
import i10 from '../homeImage/10.jpg';
import i11 from '../homeImage/11.jpg';
import i12 from '../homeImage/12.jpg';
import i13 from '../homeImage/13.jpg';
import i14 from '../homeImage/14.jpg';
import i15 from '../homeImage/15.jpg';
import i16 from '../homeImage/16.jpg';
import i17 from '../homeImage/17.jpg';
import i18 from '../homeImage/18.jpg';
import i19 from '../homeImage/19.jpg';
import i20 from '../homeImage/20.jpg';
import i21 from '../homeImage/21.jpg';
export const Home = () => {



    return (
        <div>
            <Divider hidden />
            <div>
                <Header as='h1' textAlign='center'>Playing with Game Of Thrones API</Header>
            </div>
            <Divider hidden />
            <Divider hidden />
            <div style={{paddingLeft:'100px'}}>
                <Container >
                <Image.Group size='medium' centered>
                    <Image src={i1} />
                    <Image src={i2} />
                    <Image src={i3} />
                    <Image src={i4} />
                    <Image src={i5} />
                    <Image src={i6} />
                    <Image src={i7} />
                    <Image src={i8} />
                    <Image src={i9} />
                    <Image src={i10} />
                    <Image src={i11} />
                    <Image src={i12} />
                    <Image src={i13} />
                    <Image src={i14} />
                    <Image src={i15} />
                    <Image src={i16} />
                    <Image src={i17} />
                    <Image src={i18} />
                    <Image src={i19} />
                    <Image src={i20} />
                    <Image src={i21} />
                </Image.Group>

                </Container>
                            </div>

        </div>
    )
}
