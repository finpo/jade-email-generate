# jade-email-generate

## create email html/text use jade and stylus

all useful please follow node-email-templates
https://github.com/niftylettuce/node-email-templates


### install
```console
sudo npm install -g git+https://github.com/finpo/jade-email-generate.git
```

### use
```console
mkdir email && cd email && mkdir templates && mkdir render

cd templates && mkdir welecome
// put your html.jade and text.ejs template in welecome

jademail welecome
```
