
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";


const Row = styled.div`
display: flex; 
align-items: center; 
gap:0.6rem; 
cursor: pointer;
`
export default function ToggleMode() {
    const { isDarkMode, toggleDarkMode } = useDarkMode()
    return (
        <div onClick={toggleDarkMode}>
            {!isDarkMode && <Row> <HiOutlineMoon /> Light Mode </Row>}
            {isDarkMode && <Row> <HiOutlineSun /> Dark Mode </Row>}
        </div>
    )
}
