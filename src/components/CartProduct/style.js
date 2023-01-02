import styled from "styled-components";

export const ProductCart = styled.li`

width: 100%;
height: 80px;
display: flex;
justify-content: space-between;
align-items: center;

img{
    width: 77px;
    height: 77px;
}

.text{
    width: 100%;
    display: flex;
    flex-direction: column;

    .nameButton{
        width: 90%;
        height: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        button{
                    width: 15px;
                    height: 15px;
                    border: none;
                }

                h2{
                    font-size: medium;
                    font-weight: bold;
                }
    }

    p{
        font-size: small;
    }
}


`