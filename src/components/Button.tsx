import { FunctionComponent } from 'react'

interface IButtonProps {
    styles?: string;
}

export const Button: FunctionComponent<IButtonProps> = ({ styles }: IButtonProps) => {
    return (
        <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outlne-none rounded-[10px] ${styles}`}>
            Get Started
        </button>
    )
}