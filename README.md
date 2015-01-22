# jade-email-generate

## create email html/text use jade and stylus

all useful please follow node-email-templates
https://github.com/niftylettuce/node-email-templates


### install
``
sudo npm install -g git+https://github.com/finpo/jade-email-generate.git
``

### use

``
mkdir email && cd email
mkdir tempaltes
mkdir render

cd templates && mkdir welecome
# put your html.jade and text.ejs template here

jademail welecome
``
