import { FC, useState } from 'react';

// style
import * as S from './GenericLoginForm.style'

// comps
import LoginField from '../LoginField/LoginField';
import LoginButton from '../LoginButton/LoginButton';

// consts
import { IGenericLoginForm } from './IGenericLoginForm';

const GenericLoginForm: FC<IGenericLoginForm> = ({ backButtonTitle, backCompType, buttonFunc,
    buttonText, errorMsg, fields, nextComp, setTempLoginComp, title }) => {

    const [field, setField] = useState(fields)
    const [checkEmptyRequiredFields, setCheckEmptyRequiredFields] = useState<boolean>(false)
    const [isFailed, setIsFailed] = useState(false)

    const updateFieldInfo = (isValid: boolean, value: string, index: number) => {
        setIsFailed(false)
        setField(prev => {
            prev[index].isValid = isValid
            prev[index].value = value
            return [...prev]
        })
    }

    const handleClick = async () => {
        if (field.every(element => { return element.isValid })) {
            try {
                await buttonFunc(field[0].value, field[1].value)
                nextComp && setTempLoginComp(nextComp)
            } catch (error) {
                setIsFailed(true)
            }
        }
        else {
            setCheckEmptyRequiredFields(prevCheckEmpty => { return !prevCheckEmpty })
        }
    }

    return (
        <>
            {backButtonTitle && backCompType &&
                <S.BackButton onClick={() => { setTempLoginComp(backCompType) }}>
                    {backButtonTitle}
                </S.BackButton>}
            {title && <S.Title>{title}</S.Title>}
            {
                fields.map((element, index) => (
                    <LoginField checkEmptyRequiredFields={checkEmptyRequiredFields}
                        type={element.type}
                        key={index} field={element} index={index} updateFieldInfo={updateFieldInfo}></LoginField>
                ))
            }
            {isFailed && <S.ErrorMsg>{errorMsg}</S.ErrorMsg>}
            <LoginButton text={buttonText} execFunction={handleClick} />
        </>
    );
};

export default GenericLoginForm;