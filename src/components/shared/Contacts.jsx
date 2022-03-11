import { AiOutlineMail , AiFillCaretRight } from 'react-icons/ai'
import cls from '../../scss/components/contacts.module.scss'
import { useLocales } from '../../hooks/useLocales'
import { BsTelephoneInbound } from 'react-icons/bs'
import { RiTelegramLine } from 'react-icons/ri'

const Contacts = () => {
    const locales = useLocales()

    return (
        <div id='5' className={cls.contacts}>
            <div className={cls.contacts_wrapper}>
                <div>
                    {locales.contanctMe} <AiFillCaretRight/>
                </div>
                <div>
                    <a rel='noreferrer' target={'_self'} href="tel:0700121212">
                        <BsTelephoneInbound/>
                        +996708147170
                    </a>
                    <a rel='noreferrer' target={'_self'} href="mailto:osh.kg1819@gmail.com">
                        <AiOutlineMail/>
                        osh.kg1819@gmail.com
                    </a>
                    <a rel='noreferrer' target={'_blank'} href="https://t.me/JSDeveloper2021">
                        <RiTelegramLine/>
                        @JSDeveloper2021
                    </a>
                </div>
            </div>
        </div>
    )
}

export { Contacts }