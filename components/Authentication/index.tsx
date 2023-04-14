import React, { useState } from 'react'
import SignIn from './signIn';
import SignUp from './signUp';
import InfoModal from '../Modal/Info';

const Authentication = ({ callback }: { callback: Function }) => {
    const [option, setOption] = useState<boolean>(true);
    if (option) {
        return (
        <InfoModal
            exit={callback}
            header={<SignIn.Header />}
            footer={<SignIn.Footer callback={setOption} />}
            top={50}
        >
            <SignIn />
        </InfoModal>)
    }
    return (
        <InfoModal
            exit={callback}
            header={<SignUp.Header />}
            footer={<SignUp.Footer callback={setOption}/>}
            top={50}
        >
            <SignUp />
        </InfoModal>
    )
}

export default Authentication