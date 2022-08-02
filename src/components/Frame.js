import { Flex } from "theme-ui"

// we use sx to define styles on a component level

export const Frame = (props) => {
    return <Flex 
        {...props}
        sx={{
            width:['100%','800px'],
            height:['400px','300px',],
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            background:'white',
            color: '#353535'
        }}
    />
}