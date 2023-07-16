import styled from "@emotion/styled";

export const ProfileBlock = styled.div`
width: 100%;
height: auto;
padding-top:50px;
background-color: blue;
display: flex;
flex-direction: column;
gap: 60px;
align-items: center;
`
export const Description = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
align-items: center;
`
export const Avatar = styled.img`
width: 300px;
height: 300px;
border: 2px solid;
border-color:yellow;
border-radius: 150px;
`
export const Name = styled.p`
font-size: 40px;
font-weight: 700;
`
export const Tag = styled.p`
color: #fff;
font-size: 24px;
`
export const Location = styled.p`
color: #fff;
font-size: 24px;
`
export const Stats = styled.ul`
list-style: none;
display: flex;
padding: 12px;
margin: 0;
li{
  display: grid;
  width: 80px;
  justify-items: center;
  :not(:last-child){
    border-right: 1px solid #999999;
  }
 }
`
export const StatsLabel = styled.span`
font-weight: 400;
font-size: 12px;
margin-bottom: 6px;
color: #fff;
`
export const StatsQuantity = styled.span`
font-weight: 700;
font-size: 24px;
color: #fff;
`