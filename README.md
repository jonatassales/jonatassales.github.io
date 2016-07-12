# [jonatassales.com](http://jonatassales.com)

My personal web page, containing my professional information, and my future blog.

## How it works?

I'm using [Jekyll](http://jekyllrb.com/), a ruby gem that generates static web pages'.

## First steps

1. Install [Git](http://git-scm.com/downloads) and [Ruby](http://www.ruby-lang.org/pt/downloads/), in case you don't have them yet.

2. Once installed these dependencies, open up the terminal and install [Jekyll](http://jekyllrb.com/) with the following command:

  ```sh
  $ gem install jekyll
  ```

3. Now clone the project:

  ```sh
  $ git clone https://github.com/jonatassales/jonatassales.github.io.git
  ```

4. Navigate to the project folder:

  ```sh
  $ cd jonatassales.com
  ```

5. And finally run:

  ```sh
  $ jekyll serve
  ```

You'll have access to the website at `localhost:4000`

## File structure

The Jekyll structure for the web site is the following:

```
.
|-- _includes
|-- _layouts
|-- _posts
|-- _site
|-- assets
|-- _config.yml
`-- index.html
```

## Credits

Inspired by Zeno Rocha and Guilherme Berger.
