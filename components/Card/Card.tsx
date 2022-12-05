import React from 'react';
import { CardStyle, CardContent, Category, CardFooter, ImageWrapper } from './Card.style';
import { Text } from 'styles/Foundations';
import Image from 'next/image';
import { Icon } from 'components/UIkit';
import Link from 'next/link';


const Card = (props) => {
  // console.log(props);
  return (
    <CardStyle>
      <ImageWrapper>
        <Link href={`/blog/${props.slug}`}>
          <Image
            src={props.image}
            alt={props.title}
            title=''
            // width='620'
            // height='350'
            layout='fill'
            objectFit='contain'
            objectPosition='top'
          />
        </Link>
      </ImageWrapper>

      <CardContent>
        <Category>
          <Icon name='folder' size={14} />
          <Text size={1}>
            <Link href={`/category/${props.category}`}>
              {props.categories[0]}
            </Link>
          </Text>{/*TODO change array to string*/}

        </Category>
        <Text as='h3' size={6} className='title' truncate>
          <Link href={`/blog/${props.slug}`}>
            {props.title}
          </Link>
        </Text>
        <Text className='title' lineClamp css={{ my: '$6', $$lineClamp: 3 }}>
          {props.description}
        </Text>
        <CardFooter>
          <Text size={1}  link='secondary'>
            <Link href={`/blog/${props.slug}`} >
              Read More
            </Link>
          </Text>


          {
            !!props.views &&
            <Text size={1} link='secondary'>
              <Link href={`/blog/${props.slug}`}>
                <Icon name='eye' size={14} />
                {props.views}K
              </Link>
            </Text>
          }

        </CardFooter>

      </CardContent>
    </CardStyle>
  );
};

export default Card;
