import sys 

sys.stdout.flush()

def test(url):
  print("here2: " + url)
  sys.stdout.flush()

if __name__ == '__main__':
  test(sys.argv[1]) 
