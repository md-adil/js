# Ajax Form

### Ajax form allow you to create any normal form to ajax form

```HTML
<html>
	<body>
		<form action="" method="post">
			<input type="text" name="username">
			<input type="password" name="password">
			<button type="submit">Login</button>
			<span class="status"></span>
			<img src="images/loader.gif" alt="" class="loader">
		</form>
		<script src="js/jquery.js"></script>
		<script src="js/ajax-form.jquery.js"></script>
	</body>
</html>
```

```javascript
$('form').ajaxForm(function(response, object) {
	// On response
	// response message
	// object to configure additional option
}, function() {
	// On request whenever form submit will be triggered it will get called
	// for validation or some additional feature
}, {
	// configuration
	loader: 'loader', // true or class name of loader default loader
	status: 'status' // true or class name for response message container element default status
})
```

# Dom

### Dom is document object model allow to create html element in javascript

```HTML
<html>
<head>
	<title>Document</title>
</head>
<body>
	<div class="container"></div>
	<script src="js/dom.js"></script>
</body>
</html>
```

```js
	dom.h1(
		dom.span({id: 'hello'}, 'Hello World')
	).to('container');

	dom.a({className: 'link'}, 'Home')
	.to('body');

	var myHtml = dom.div(
		{className: 'container'},
		dom.nav(
			{className: 'navigation'}
				dom.ul(
					{className: 'list-item'},
					dom.li(
						{className: 'nav-items'},
						dom.a(
							{className: 'navs'},
							'Home'
						)
					)
				)
			)
		)

		document.getElementById('body').appendChild(myHtml)
```