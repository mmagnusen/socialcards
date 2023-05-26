import NextHead from "next/head";

const defaultDescription = "The latest tech events.";
const defaultOGURL = "https://www.headstack.co";
const defaultTitle = "HeadStack.co | The home of tech meetups";
const defaultKeyWords = "Tech events, tech meetups";
const defaultImage = "https://secure.meetupstatic.com/photos/event/7/8/1/d/600_490590749.jpeg";

type Props = {
  children?: React.ReactNode;
  description?: string;
  image?: string;
  keyWords?: string;
  title?: string;
  url?: string;
};
const Head = ({
  children,
  description = defaultDescription,
  title = defaultTitle,
  url = defaultOGURL,
  keyWords = defaultKeyWords,
  image = defaultImage,
}: Props) => (
  <NextHead>
    <meta charSet="utf-8" />
    <title>copy title from headstack</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keyWords} />
    <link rel="canonical" href={url} />

    {/* <!-- Styles --> */}
    <meta name="viewport" content="width=device-width, initial-scale=1 viewport-fit=cover" />
    <meta name="theme-color" content="#000000" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    {/* <!-- Open Graph --> */}
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="HeadStack" />
    <meta property="og:description" content={description} />
    <meta property="og:locale" content="en_GB" />
    <meta property="og:image" content={image} />
    <meta property="og:type" content="article" />

    {/* <!-- Twitter Cards --> */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@HeadStackHQ" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta
      name="twitter:image"
      content="https://images.unsplash.com/photo-1684670179697-7b6d0213f152?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    />
    <meta
      property="twitter:image"
      content="https://images.unsplash.com/photo-1684670179697-7b6d0213f152?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    />

    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap" rel="stylesheet" />
    {children}
  </NextHead>
);

export default Head;
