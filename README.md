# AWS Serverless Architecture
A PAAS [ Platform-as-a-service ] web aplication Deployment model using AWS Cloud. 
The Platform-as-a-Service deployment model provides a platform for developers to build, deploy, and manage applications without the complexity of managing underlying infrastructure. It offers scalability, flexibility, and cost-efficiency, making it an attractive option for organizations looking to accelerate their application development and deployment processes.
A serverless architecture, particularly with AWS Cloud, refers to a design approach where you don't have to provision or manage servers explicitly. Instead, you focus on writing and deploying code, and AWS handles the infrastructure management, scaling, and maintenance for you.

### Steps to Build the Project:
- Create a DynamoDB table to store the items. 
- Build a Lambda function to handle the CRUD operations on the DynamoDB table. 
- Use S3 to store and host the web application's static files (HTML, CSS, and JavaScript). 
- Create a CloudFront distribution to serve the S3-hosted static files with low latency.


### NOTE
After the Creation of the Website I terminated all the AWS Services I used because else I would ask to pay the charge for these services[ Pay-as-you-go pricing ]
