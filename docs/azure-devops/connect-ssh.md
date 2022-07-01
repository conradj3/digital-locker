---
sidebar_position: 1
tags: ubuntu
---

# Connect via ssh

OpenSSH will report the error no matching host key type found. Their offer: ssh-rsa if the server it's connecting to is offering to authenticate over ssh-rsa ( RSA/SHA1). Azure Devops (TFS) is offering to authenticate over ssh-rsa. As noted in the answer by bk2204, this algorithm is not considered cryptographically secure.

Since it's considered weak, `OpenSSH deprecated using SHA-1 in 8.2 in 2020-02-14`.

It is now possible[1] to perform chosen-prefix attacks against the SHA-1 hash algorithm for less than USD$50K. For this reason, we will be disabling the "ssh-rsa" public key signature algorithm that depends on SHA-1 by default in a near-future release.

Add ***~/.ssh/config**

```
Host your-azure-devops-domain
  IdentityFile ~/.ssh/id_rsa
  IdentitiesOnly yes
  HostkeyAlgorithms +ssh-rsa
  PubkeyAcceptedAlgorithms +ssh-rsa
```
