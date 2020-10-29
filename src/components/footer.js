import React  from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {

    const accounts = (url) => {

        window.open( url)
    }

    return (
        <div>
            <TwitterIcon   style={{ marginRight: '10%'}} onClick = {() => {accounts('https://twitter.com/jatenidida')}} />
            <LinkedInIcon  style={{ marginLeft: '-10%'}} onClick = {() => {accounts('https://www.linkedin.com/in/jateni-dida-8a9b5a148/')}} />
        </div>
    )

}

export default Footer