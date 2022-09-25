# Nodejs Crawler

### It is a basic nodejs crawler to crawl any domain and get all the urls from that domain

Sample Input HTML page server at ```localhost:4000```

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Hello World</title>
</head>
<body class="body-color">
	<nav>
		<ul>
			<li><a href="/index.html">Home</a></li>
			<li><a href="/about.html">About</a></li>
			<li><a href="/contact.html">Contact</a></li>
			<li><a href="/blog.html">Blogs</a></li>
		</ul>
	</nav>
	<section class="main">
		<h1 class="red full-width">Hello</h1>
		<h3 class="blue full-width">World</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, laudantium, omnis. Ea quaerat minima, nostrum doloremque repellendus! Ratione quasi, non eligendi quidem at culpa animi vitae id eius corrupti deleniti.
			<img src="https://fakeimg.pl/300/" alt="Some image" />
		</p>
	</section>
	<main class="container">
		<p>This is some more dummy text</p>
		<h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat vitae dolor, atque, excepturi numquam cumque ut iusto, odio perferendis cum rem saepe eveniet voluptatum fuga debitis et illo distinctio eligendi!</h4>
	</main>
	<div class="div_content">
		Hi there, this is empty div with no children :(
	</div>
	<section class="different">
		<p id="p-id" data-attr="custom-attribute">Different section</p>
	</section>
</body>
</html>
```

Output:
```
💻💻💻 Scraping...

{ links:
   [ { linkText: 'Home', linkUrl: '/index.html' },
     { linkText: 'About', linkUrl: '/about.html' },
     { linkText: 'Contact', linkUrl: '/contact.html' },
     { linkText: 'Blogs', linkUrl: '/blog.html' } ],
  requestTime: 64,
  title: 'Hello World',
  url: 'http://localhost:4000' }

🥳🥳🥳 Done...
```
