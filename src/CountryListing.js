import React from 'react'
import { Grid, Header, Icon, Divider, Button, Card } from 'semantic-ui-react'
import styles from './CountryListing.module.css'

const Country = () => (
    <Grid className={styles.content} container>
        <Grid.Row>
            <Grid.Column width={10}>
                <Header as='h2'>
                    <span>Hong Kong</span>
                    <Header.Subheader className={styles.countryMeta}>341 Travellers</Header.Subheader>
                </Header>
            </Grid.Column>
            <Grid.Column width={6}>
                <Button className={styles.browseAll} size='mini' compact>BROWSE ALL</Button>
            </Grid.Column>
            <Divider className={styles.countryDivider} fitted />
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
                <Card.Group className={styles.countryItems} itemsPerRow={3}>
                    <Card image='https://via.placeholder.com/200x200' />
                    <Card image='https://via.placeholder.com/200x200' />
                    <Card image='https://via.placeholder.com/200x200' />
                    <Card image='https://via.placeholder.com/200x200' />
                    <Card image='https://via.placeholder.com/200x200' />
                    <Card image='https://via.placeholder.com/200x200' />
                </Card.Group>
            </Grid.Column>
        </Grid.Row>
    </Grid>
)

const CountryListing = () => (
    <div className={styles.container}>
        <Grid container>
            <Grid.Row>
                <Grid.Column className={styles.menu} floated='left' width={5} textAlign="left">
                    <Icon name='th' size='big' link />
                </Grid.Column>
                <Grid.Column className={styles.search} floated='right' width={5} textAlign='right'>
                    <Icon name='search' size='big' />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Header className={styles.title} as='h1'>
                        <span>Pork belly kevin ham</span>
                        <Header.Subheader className={styles.titleSubheader}>Leberkas biltong hamburger, bacon sausage swine capicola. </Header.Subheader>
                    </Header>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        <Country />
        <Country />
    </div>
)

export default CountryListing