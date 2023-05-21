import crypt as c

salt1 = '$y$j9T$5LImmws2fco9AeRmLSB2j0'
hash1 = '$y$j9T$5LImmws2fco9AeRmLSB2j0$fYPmdqu1Q/FDiwPJgkCIW9wX76w12SNEiYAodUzafo5'

salt2 = '$y$j9T$nFwHNF0c3SCbH6ESyzSKw.'
hash2 = '$y$j9T$nFwHNF0c3SCbH6ESyzSKw.$ph1Q6UMJnIyAU6O7ZLYH14H5C4.V1SJjcrjLqVQuG00'

found1, found2 = False, False

with open('common-9.txt', 'r') as f:
    for line in f:
        line = line.strip()
        linehash1 = c.crypt(line, salt1)
        linehash2 = c.crypt(line, salt2)
        
        if linehash1 == hash1:
            print('Found password for testeadm: {}'.format(line))
            found1 = True
            
        if linehash2 == hash2:
            print('Found password for pimpolho: {}'.format(line))
            found2 = True
            
        if found1 and found2:
          break