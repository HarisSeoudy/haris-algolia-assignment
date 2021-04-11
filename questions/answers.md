*Question 1*  

From: marissa@startup.com  
Subject:  Bad design  

Hello,  
  
Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.  
   
Thanks,  
Marissa  

*Answer 1*  

Hi Marissa,

Thank you for sharing this with me – we always welcome customer feedback. I’m sorry to hear you don’t like the new dashboard design. I’ll pass this information onto our Product team as they are always looking for ways to improve the dashboard for our users. 

In the meantime, you can use our API to clear and delete indexes as opposed to doing it via the dashboard, saving yourself time and increasing efficiency. Follow [this link]( https://www.algolia.com/doc/api-reference/api-methods/clear-objects/) for the documentation on how this can easily be done. 

I’d be happy to jump on a call with you this week to walk you through the above, let me know your availability and we can put something in the diary.

Looking forward to hearing from you soon. 

Best,
Haris Seoudy
Technical Account Manager – Algolia 
 
  
--

*Question 2*:   
  
From: carrie@coffee.com  
Subject: URGENT ISSUE WITH PRODUCTION!!!!  
  
Since today 9:15am we have been seeing a lot of errors on our website. Multiple users have reported that they were unable to publish their feedbacks and that an alert box with "Record is too big, please contact enterprise@algolia.com".  
  
Our website is an imdb like website where users can post reviews of coffee shops online. Along with that we enrich every record with a lot of metadata that is not for search. I am already a paying customer of your service, what else do you need to make your search work?  
  
Please advise on how to fix this. Thanks.   

*Answer 2*

Hi Carrie, 

I’m sorry to hear you’re experiencing issues with users posting reviews on your website.

Algolia limits the size of individual records for performance reasons and this limit might depend on your plan. It looks like your users are submitting reviews which are too large. In order to rectify this, I would suggest limiting the number of characters the user can enter when posting their reviews on your website. 

In addition to this, there are two main ways to decrease the size of your records;
1.	Ask yourself if all of the data inside your record is necessary. If it’s not useful for either searching, faceting, ranking, or displaying, then it’s safe to remove them from your records in Algolia. You can read more about [simplifying your record structure here]( https://www.algolia.com/doc/guides/sending-and-managing-data/prepare-your-data/how-to/reducing-object-size/).
2.	Split the record into smaller chunks and use Algolia’s [distinct]( https://www.algolia.com/doc/api-reference/api-parameters/distinct/) feature to only display the best results.

If you wanted to read more about record size limits, [this documentation]( https://www.algolia.com/doc/faq/basics/is-there-a-size-limit-for-my-index-records/) provides additional support relating to your issue. 

Alternatively, depending on your current plan and if it’s a legacy plan or not, you may be able to upgrade which would allow for an increased record size limit. 

If you need further clarification on the above or you would like to discuss upgrading your plan, please don’t hesitate to drop me a message and we can set up a call to talk through the options available to you. 

Best,
Haris Seoudy
Technical Account Manager – Algolia 

  
--

*Question 3*   

From: marc@hotmail.com  
Subject: Error on website  
  
Hi, my website is not working and here's the error:  
  
![error message](./error.png)  
  
Can you fix it please?  

*Answer 3*

Hi Marc,

It looks like you’re referencing something called “searchkit” in your code, however it hasn’t been defined so it cannot be accessed. 

Based on the information you have provided, I’m unable to verify if this is a problem with Algolia or something else in your code, and unfortunately, without more information, it will be very difficult to resolve. 


Please could you tell me what you are trying to achieve and which code raises this error so that I may attempt to assist you further.

Best,
Haris Seoudy
Technical Account Manager – Algolia 