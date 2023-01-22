import React,{ useState} from 'react'

const obj = {"a":false,"b":false,"c":false,"d":false,"e":false,"f":false,"g":false,"h":false}

export const usePaymentHook = () => {
    const [flag, setFlag ] = useState(obj);
    const handleNavi = (id)=>{
      if(id==="a")
      {
        setFlag({...obj,"a":!flag[id]});
      }
      else if(id==="b")
      {
        setFlag({...obj,"b":!flag[id]});
      }
      else if(id==="c")
      {
        setFlag({...obj,"c":!flag[id]});
      }
      else if(id==="d")
      {
        setFlag({...obj,"d":!flag[id]});
      }
      else if(id==="e")
      {
        setFlag({...obj,"e":!flag[id]});
      }
      else if(id==="f")
      {
        setFlag({...obj,"f":!flag[id]});
      }
      else if(id==="g")
      {
        setFlag({...obj,"g":!flag[id]});
      }
      else if(id==="h")
      {
        setFlag({...obj,"h":!flag[id]});
      }
    } 
  return { flag, handleNavi }
}

export let CardArray = [
  {id:"a", val:"input1", val1:false, img:"https://ii1.pepperfry.com/assets/w22-payment-credit-card.svg", text:"Credit card"},
  {id:"b", val:"input2", val1:false, img:"https://ii2.pepperfry.com/assets/w22-payment-upi.svg", text:"ATM/Debit Card"},
  {id:"c", val:"input3", val1:false, img:"https://ii2.pepperfry.com/assets/w22-payment-upi.svg", text:"Google Pay/UPI"},
  {id:"d", val:"input4", val1:false, img:"https://ii2.pepperfry.com/assets/w22-payment-banking-net.svg", text:"Internet Banking"},
  {id:"e", val:"input5", val1:false, img:"https://ii2.pepperfry.com/assets/w22-payment-emi.svg", text:"EMI"},
  {id:"f", val:"input6", val1:false, img:"https://ii3.pepperfry.com/assets/w22-payment-wallet.svg", text:"Wallet"},
  {id:"g", val:"input7", val1:false, img:"https://ii3.pepperfry.com/assets/w22-payment-gift-card.svg", text:"Pepperfry Gift Card"},
  {id:"h", val:"input8", val1:false, img:"https://ii3.pepperfry.com/assets/w22-payment-credit-card.svg", text:"International Cards"}
];