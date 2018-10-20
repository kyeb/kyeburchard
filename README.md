# kyeburchard

Personal website for me (Kye Burchard)

Development:
```
git clone git@github.com:kyeb/kyeburchard.git
mv kyeburchard kyeb && cd kyeb
gulp dev
```

The `dev` gulp task does a couple things:
- Runs a BrowserSync server hosting the site locally
- Watches for changes to `index.html` to reload
- Watches for changes to `scss/styles.scss` to recompile to `css/styles.css`
and injects the changes into the BrowserSync server, without reloading
