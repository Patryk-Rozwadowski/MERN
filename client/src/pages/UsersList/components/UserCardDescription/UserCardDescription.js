import Grid from "@material-ui/core/Grid";
import Heading from "../../../../components/Heading/Heading";
import Text from "../../../../components/Text/Text";
import React from "react";

const UserCardDescription = ({name, description}) =>
    <Grid justify={'center'} container>
        <Grid className='text-container' item>
            <Heading variant='subtitle' color='black' type='h2'>
                {name}
            </Heading>
            <Text>{description ? description : 'No description provided!'}</Text>
        </Grid>
    </Grid>

export default UserCardDescription;
