FROM webdevops/php-nginx:8.1

ENV WEB_DOCUMENT_ROOT=/app/public
ENV PHP_DISMOD=bz2,calendar,exiif,ffi,intl,gettext,ldap,mysqli,imap,pdo_pgsql,pgsql,soap,sockets,sysvmsg,sysvsm,sysvshm,shmop,xsl,zip,gd,apcu,vips,yaml,imagick,mongodb,amqp
ENV CONTAINER_UID=1003

# Install python/pip
ENV PYTHONUNBUFFERED=1
#RUN apt install -yy python3
RUN python -m ensurepip
RUN pip install --no-cache --upgrade pip setuptools
RUN pip install --no-cache pandas pymysql surprise plotly cryptography

WORKDIR /app

#RUN composer install --no-interaction --optimize-autoloader --no-dev

#RUN php artisan optimize

# Ensure all of our files are owned by the same user and group.
#RUN chown -R application:application .
