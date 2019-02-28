#!/bin/bash
./build.sh

ssh -i ~/.ssh/aws-portfolio.pem ec2-user@54.200.184.39 'bash -s'<< EOF
    
    docker rm -f mq-portfolio
    docker pull muatasimqazi/mq-portfolio

    docker run -d \
    --name mq-portfolio \
    -p 80:80 -p 443:443 \
    -v /etc/letsencrypt:/etc/letsencrypt:ro \
    muatasimqazi/mq-portfolio

EOF