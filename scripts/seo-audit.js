#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 NextCore SEO Audit Report');
console.log('============================\n');

// Check 1: Meta tags in layout
function checkMetaTags() {
  console.log('1. ✅ Meta Tags Configuration');
  const layoutPath = path.join(__dirname, '../app/layout.tsx');
  const layoutContent = fs.readFileSync(layoutPath, 'utf8');
  
  const checks = [
    { name: 'Title tag', pattern: /title.*NextCore.*ISPs/, found: false },
    { name: 'Description', pattern: /description.*Software especializado/, found: false },
    { name: 'Open Graph', pattern: /openGraph/, found: false },
    { name: 'Twitter Cards', pattern: /twitter/, found: false },
    { name: 'Robots meta', pattern: /robots/, found: false },
  ];

  checks.forEach(check => {
    check.found = check.pattern.test(layoutContent);
    console.log(`   ${check.found ? '✅' : '❌'} ${check.name}`);
  });

  return checks.filter(c => c.found).length === checks.length;
}

// Check 2: Schema markup
function checkSchemaMarkup() {
  console.log('\n2. ✅ Schema.org Markup');
  const schemaPath = path.join(__dirname, '../app/components/SchemaMarkup.tsx');
  const schemaContent = fs.readFileSync(schemaPath, 'utf8');
  
  const checks = [
    { name: 'SoftwareApplication type', pattern: /@type.*SoftwareApplication/, found: false },
    { name: 'ISP audience', pattern: /audienceType.*ISPs/, found: false },
    { name: 'Feature list', pattern: /featureList/, found: false },
    { name: 'Aggregate rating', pattern: /aggregateRating/, found: false },
  ];

  checks.forEach(check => {
    check.found = check.pattern.test(schemaContent);
    console.log(`   ${check.found ? '✅' : '❌'} ${check.name}`);
  });

  return checks.filter(c => c.found).length === checks.length;
}

// Check 3: Sitemap and robots
function checkSitemapAndRobots() {
  console.log('\n3. ✅ Sitemap & Robots.txt');
  
  const checks = [
    { name: 'Sitemap exists', path: '../app/sitemap.ts', found: false },
    { name: 'Robots exists', path: '../app/robots.ts', found: false },
  ];

  checks.forEach(check => {
    check.found = fs.existsSync(path.join(__dirname, check.path));
    console.log(`   ${check.found ? '✅' : '❌'} ${check.name}`);
  });

  return checks.filter(c => c.found).length === checks.length;
}

// Check 4: Image optimization
function checkImageOptimization() {
  console.log('\n4. ✅ Image Optimization');
  const featuresPath = path.join(__dirname, '../app/components/Features.tsx');
  const featuresContent = fs.readFileSync(featuresPath, 'utf8');
  
  const checks = [
    { name: 'Next.js Image component', pattern: /import.*Image.*next\/image/, found: false },
    { name: 'Priority loading', pattern: /priority.*index < 2/, found: false },
    { name: 'Responsive sizes', pattern: /sizes=/, found: false },
    { name: 'Quality optimization', pattern: /quality.*85/, found: false },
  ];

  checks.forEach(check => {
    check.found = check.pattern.test(featuresContent);
    console.log(`   ${check.found ? '✅' : '❌'} ${check.name}`);
  });

  return checks.filter(c => c.found).length === checks.length;
}

// Check 5: Performance optimizations
function checkPerformanceOptimizations() {
  console.log('\n5. ✅ Performance Optimizations');
  
  const checks = [
    { name: 'Middleware exists', path: '../app/middleware.ts', found: false },
    { name: 'Cache headers', path: '../app/middleware.ts', pattern: /Cache-Control/, found: false },
    { name: 'Security headers', path: '../app/middleware.ts', pattern: /X-Content-Type-Options/, found: false },
    { name: 'Next.js config optimized', path: '../next.config.js', pattern: /compress.*true/, found: false },
  ];

  checks.forEach(check => {
    if (check.path) {
      const filePath = path.join(__dirname, check.path);
      if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');
        check.found = check.pattern ? check.pattern.test(content) : true;
      }
    }
    console.log(`   ${check.found ? '✅' : '❌'} ${check.name}`);
  });

  return checks.filter(c => c.found).length === checks.length;
}

// Check 6: Content structure
function checkContentStructure() {
  console.log('\n6. ✅ Content Structure');
  const heroPath = path.join(__dirname, '../app/components/Hero.tsx');
  const heroContent = fs.readFileSync(heroPath, 'utf8');
  
  const checks = [
    { name: 'Semantic HTML (main tag)', pattern: /<main/, found: false },
    { name: 'H1 tag present', pattern: /<h1/, found: false },
    { name: 'Alt text for images', pattern: /alt=/, found: false },
    { name: 'ARIA labels', pattern: /aria-label/, found: false },
  ];

  checks.forEach(check => {
    check.found = check.pattern.test(heroContent);
    console.log(`   ${check.found ? '✅' : '❌'} ${check.name}`);
  });

  return checks.filter(c => c.found).length === checks.length;
}

// Run all checks
function runAudit() {
  const results = [
    checkMetaTags(),
    checkSchemaMarkup(),
    checkSitemapAndRobots(),
    checkImageOptimization(),
    checkPerformanceOptimizations(),
    checkContentStructure(),
  ];

  const totalChecks = results.length;
  const passedChecks = results.filter(r => r).length;

  console.log('\n📊 SEO Audit Summary');
  console.log('===================');
  console.log(`Total checks: ${totalChecks}`);
  console.log(`Passed: ${passedChecks}`);
  console.log(`Failed: ${totalChecks - passedChecks}`);
  console.log(`Score: ${Math.round((passedChecks / totalChecks) * 100)}%`);

  if (passedChecks === totalChecks) {
    console.log('\n🎉 Excellent! All SEO optimizations are in place.');
    console.log('Your NextCore app is ready for top Google rankings!');
  } else {
    console.log('\n⚠️  Some optimizations need attention.');
    console.log('Review the failed checks above and implement missing features.');
  }
}

runAudit();
