import React,{useState} from 'react'

const Trial = (props) => {

    const {isCreateCard=true,heading="",iscompleted=true, subject="5",lab='2',semester='internal'}=props
  return (
    <div>
        {isCreateCard?(<div  style={{
            width: 392,
            height: 262,
            background: "white",
            borderRadius: 10,
            border: "1px dashed #000000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}></div>):(<div style={{width: 392,
            height: 262, background: "#FFFFFF",border:iscompleted?'1px solid red':'1px solid yellow'}} >
                <section>
                    <div>{heading}</div>
                    <div><label > lab {lab}</label></div>
                    <div>{semester}</div>
                    <div>{subject}</div>
                    <div>{iscompleted}</div>

                </section>
            </div>)}
    </div>
  )
 }
// {allocate.map(heading,lab,sem,iscompleted)}


 
const allocationpage=(props)=>{
    const [cardDetails, setCardDetails] = useState([
           
            {
              heading: "BE ECE SEM1",
              branch: "B.E",
              department: "ECE",
              sem: "1",
              subject: "5",
              lab: "2",
              semester: "Internals",
              iscompleted: false,
              isCreateCard:false,
            },
            {
                heading: "BE EEE SEM1",
                branch: "B.E",
                department: "EEE",
                sem: "1",
                subject: "5",
                lab: "2",
                semester: "MODELS",
                iscompleted: false,
                isCreateCard:false,
              },])
              return(
                <>
                {cardDetails.map((item)=>{
                    return(
                        <>
                        <Trial
                         isCreateCard={item.isCreateCard}
                        heading={item.heading}
                        subject={item.subject}
                        lab={item.lab}
                        semester={item.semester}
                        />
                        </>
                    )
                })}
                </>
              )
}
export default allocationpage