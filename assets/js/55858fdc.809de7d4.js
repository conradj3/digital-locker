"use strict";(self.webpackChunkdigital_locker=self.webpackChunkdigital_locker||[]).push([[127],{8095:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"AKS","metadata":{"permalink":"/digital-locker/blog/AKS","editUrl":"https://github.com/conradj3/digital-locker/tree/main/blog/blog/2022-4-28.mdx","source":"@site/blog/2022-4-28.mdx","title":"Production Down","description":"In short Duke, a shit storm.","date":"2022-04-28T00:00:00.000Z","formattedDate":"April 28, 2022","tags":[{"label":"Azure","permalink":"/digital-locker/blog/tags/azure"},{"label":"Kubernetes","permalink":"/digital-locker/blog/tags/kubernetes"},{"label":"Graph","permalink":"/digital-locker/blog/tags/graph"},{"label":"Identity","permalink":"/digital-locker/blog/tags/identity"}],"readingTime":3.22,"truncated":true,"authors":[{"name":"Conrad","title":"Maintainer","url":"https://github.com/conradj3","imageURL":"https://github.com/conradj3.png","key":"conrad"}],"frontMatter":{"slug":"AKS","title":"Production Down","authors":["conrad"],"tags":["Azure","Kubernetes","Graph","Identity"],"hide_table_of_contents":false},"nextItem":{"title":"Welcome","permalink":"/digital-locker/blog/welcome"}},"content":"## In short Duke, a shit storm.\\n\\nThursday morning started just great. We had a deployment into a production Kubernetes cluster failing to pull container images from our Azure Container Registry. The `Azure Service Principal` account secret used by the `Kubernetes` cluster had expired and needed to be renewed.\\n\\nWe got around to addressing the new deployment later in the afternoon when many of our staff had left for the day. One might ask why we managed to tackle this problem in the afternoon if it\'s production? This is because it had no impact on current solutions on the `Kubernetes` and only prevented new feature deployments that were not urgent. So we created a new service principal using the Azure CLI and updated the Kubernetes cluster credentials. Of course, we had to give permissions to the Container Registry to pull images `acr pull`, and we also drained and deallocated nodes in hopes the new credential would allow permission to pull images. This was a mistake, a bad mistake. As we started draining nodes and deallocating and bringing them back online because they would not reboot... we learned we were in the shit.\\n\\nOur applications started experiencing a problem with the core DNS service inside Kubernetes and were routing outside our cluster. We issued a priority incident, eventually after chasing logs, firewalls, and all the fun stuff. We made a call to reboot the Kubernetes Service. Fantastic! After the reboot, all our daemon sets and pods were up, and so was our primary graph service. We decided we were ready to call it for the night, but we were interrupted by a keen team member that they were seeing something extremely odd. Low and behold, the pods came up, but many of the replicas started crashing. \\n\\nSo we had intermittent service of our primary graph service, and we made a call to downgrade the priority. Calls were bouncing from our applications, but at least some were going through. I ended the night in a depressed state as I was sure we could resolve the problem if we continued to stare at the screen and solution. One of our product owners pulled the plug and said, \\" Let us get back at this tomorrow morning after getting some sleep.\\" Sure enough, we did.\\n\\nAfter catching about 4 hours of sleep, because my brain was racking on what could be causing this problem after we all retired for the night, I woke up to take my kids to school. Our team was all present in a call at 8:00 AM on the dot. We learned we had missed a step within the hour while creating the `Service Principal`. It lacked the `network contributor` role to update the Kubernetes Route Tables, which was the root cause of Kubernetes pods were trying to route outside the cluster. After adding `network contributor` all our pods came back to life, and service was restored.\\n\\n\x3c!--truncate--\x3e\\n\\n## Conclusion\\n\\nAfter describing our mistakes one could reference [Azure - Kubernetes Service Principals](https://docs.microsoft.com/en-us/azure/aks/kubernetes-service-principal?tabs=azure-cli)\\n\\n:::caution\\nThis is were things went south.\\n:::\\n\\nWhen running the follow command after service principal creation;\\n\\n```bash\\naz role assignment create --assignee <appId> --scope <resourceScope> --role Contributor\\n```\\n\\nWe required both of the scopes receive contributor assignment:\\n\\n- /subscriptions/***guid***/resourceGroups/myResourceGroup \\n- /subscriptions/***guid***/resourceGroups/myResourceGroupVnet/providers/Microsoft.Network/virtualNetworks/myVnet\\n\\nThe official wording says \\"or\\" but it was an \\"and\\" in our environment. Simple, but caused a hell of a headache and crunch session in the moment to try and bring the production services back to a fully restored state. \\n\\nWe attempted to resolve this on our own but several of the credentials and individual rbac prevent a lot of engineers from fixing this due to the ownership of the Service Principal / Subscription roles preventing individuals from adding roles to identity.  We were much relieved when services were restored hope this read might help someone who might encounter this."},{"id":"welcome","metadata":{"permalink":"/digital-locker/blog/welcome","editUrl":"https://github.com/conradj3/digital-locker/tree/main/blog/blog/2022-4-21.md","source":"@site/blog/2022-4-21.md","title":"Welcome","description":"Hello All,","date":"2022-04-21T00:00:00.000Z","formattedDate":"April 21, 2022","tags":[{"label":"hello","permalink":"/digital-locker/blog/tags/hello"}],"readingTime":0.16,"truncated":false,"authors":[{"name":"Conrad","title":"Maintainer","url":"https://github.com/conradj3","imageURL":"https://github.com/conradj3.png","key":"conrad"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["conrad"],"tags":["hello"]},"prevItem":{"title":"Production Down","permalink":"/digital-locker/blog/AKS"}},"content":"Hello All,\\n\\nWelcome to my blog.  I attend to use this blog for daily problems we face with modern day infrastructure and applications.  I hope you enjoy the post and happy reading!"}]}')}}]);