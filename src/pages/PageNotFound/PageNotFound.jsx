import Link from '../../components/UI/Link/Link';

import {
  FoundContainerStyled,
  FoundSubtitleStyled,
  FoundTextStyled,
  FoundTitleStyled,
} from './PageNotFoundStyles';

const PageNotFound = () => {
  return (
    <div>
      <FoundContainerStyled>
        <FoundTextStyled>
          <FoundTitleStyled>404 Error</FoundTitleStyled>
          <FoundSubtitleStyled>¡Se fundio el motor!</FoundSubtitleStyled>
          <p>Parece que la página que buscás no existe o fue removida</p>
          <Link />
        </FoundTextStyled>
        <img
          src='https://res.cloudinary.com/dkakar71o/image/upload/v1662172031/error_sdlgzk.png'
          alt=''
          className='imgNotFound'
        />
      </FoundContainerStyled>
    </div>
  );
};

export default PageNotFound;
