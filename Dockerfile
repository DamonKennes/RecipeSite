FROM webdevops/php-nginx:8.1-alpine

ENV WEB_DOCUMENT_ROOT=/app/public
ENV PHP_DISMOD=bz2,calendar,exiif,ffi,intl,gettext,ldap,mysqli,imap,pdo_pgsql,pgsql,soap,sockets,sysvmsg,sysvsm,sysvshm,shmop,xsl,zip,gd,apcu,vips,yaml,imagick,mongodb,amqp
ENV CONTAINER_UID=1003

# Install python/pip
ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache python3 py3-pandas
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools
RUN pip3 install --no-cache pymysql surprise plotly sklearn

WORKDIR /app

#RUN composer install --no-interaction --optimize-autoloader --no-dev

#RUN php artisan optimize

# Ensure all of our files are owned by the same user and group.
#RUN chown -R application:application .
