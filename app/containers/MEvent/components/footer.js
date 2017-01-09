import React from 'react'

import {
    Footer,
    FooterLinks,
    FooterLink,
    FooterText
} from 'react-weui'

const Foot = () => (
    <Footer>
        <FooterLinks>
            <FooterLink href="javascript:void(alert('联系客服'))">有任何疑问请联系客服</FooterLink>
        </FooterLinks>
        <FooterText>Copyright &copy; 2016 xxx.com </FooterText>
    </Footer>
)

export default Foot